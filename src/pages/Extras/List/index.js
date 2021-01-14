/*React and Redux */
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import extrasAction from "../../../redux/actions/extras";
/*Icon and Components */
import { Link } from "react-router-dom";
import { FiX, FiPlus } from "react-icons/fi";
import Table from "../../../components/HotelsExtras/Table";
import HotelsHeader from "../../../components/HotelsHeader";
import Translations from "../../../components/HotelsExtras/ModalForm";
import TopOptionsBar from "../../../components/HotelsExtras/TopOptionsBar";
import Pagination from "../../../components/Pagination";
import Card from "../../../components/HotelsRoomList/RoomsCard";
/*Api and Styles*/
import Api from "../../../services/extras";

function Extras() {
  const dispatch = useDispatch();
  const [isAllSelect, setIsAllSelect] = useState(false);
  const [selected, setSelected] = useState([]);
  const [isRemovingItem, setIsRemovingItem] = useState(false);
  const { extras, page, limit, totalPages, size } = useSelector(
    state => state.extraReducer
  );

  function handleChangePageOrLimit(field, data) {
    dispatch(extrasAction.setPageOrLimit(field, data));
  }

  function handleChangeSelectAll() {
    setIsAllSelect(oldState => {
      !oldState ? setSelected(extras) : setSelected([]);
      return !oldState;
    });
  }

  function handleSelect(extra, option) {
    if (option) {
      setSelected([...selected, extra]);
    } else {
      const newSelected = selected.filter(item => item.id !== extra.id);
      setSelected(newSelected);
    }
  }

  async function handleSingleDelete(id) {
    if (window.confirm("Do you really want to delete this item ?")) {
      setIsRemovingItem(true);
      const res = await Api.deleteExtra(id);
      res && window.alert("Item removed with success");
      setIsRemovingItem(false);
    }
  }

  function handleDeleteSelected() {
    if (window.confirm("Do you really want to delete all selected items ?")) {
      selected.map(async item => {
        setIsRemovingItem(true);
        await Api.deleteExtra(item.id);
        setIsRemovingItem(false);
      });
    }
  }

  useEffect(() => {
    async function fetchData() {
      if (limit !== "all") {
        let pageNumber = page;
        await Api.getExtrasSize(dispatch);

        if (limit === 100 && size <= 100) pageNumber = 1; // eslint-disable-line no-unused-vars

        await Api.getExtrasPaginate(page, limit, dispatch);
        dispatch(extrasAction.setTotalPages(size));
      } else {
        await Api.getExtras(dispatch);
      }
    }

    if (!isRemovingItem) fetchData();
  }, [isRemovingItem, dispatch, limit, page, size]);

  const body = (
    <div className="row">
      <div className="col-md-12">
        <TopOptionsBar type={"content-between"}>
          <Link className="btn btn-success" to="/hotels/extras/create">
            <FiPlus /> ADD
          </Link>
          <button className="btn btn-danger" onClick={handleDeleteSelected}>
            <FiX /> Delete Selected
          </button>
        </TopOptionsBar>
        <Table
          handleSingleDelete={handleSingleDelete}
          handleChangeSelectAll={handleChangeSelectAll}
          isAllSelect={isAllSelect}
          handleSelect={handleSelect}
        />
        <Pagination
          page={page}
          limit={limit}
          totalPages={totalPages}
          handleChangePageOrLimit={handleChangePageOrLimit}
        />
      </div>
    </div>
  );

  return (
    <>
      <HotelsHeader />
      <div className="container mt-5">
        <Card title="EXTRAS MANAGEMENT" content={body} />
      </div>
      {extras?.map(extra => (
        <Translations
          key={`extra${extra.id}`}
          extra={extra}
          label={`traduções para ${extra.name}`}
        />
      ))}
    </>
  );
}

export default Extras;
