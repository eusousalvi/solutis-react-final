import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiX, FiPlus } from "react-icons/fi";
import Table from "../../../components/HotelsExtras/Table";
import HotelsHeader from "../../../components/HotelsHeader";
import Translations from "../../../components/HotelsExtras/ModalForm";
import TopOptionsBar from "../../../components/HotelsExtras/TopOptionsBar";
import ExtraServices from "../../../services/extras";

function Extras() {
  const [extras, setExtras] = useState([]);
  const [isAllSelect, setIsAllSelect] = useState(false);
  const [selected, setSelected] = useState([]);
  const [isRemovingItem, setIsRemovingItem] = useState(false);

  async function fetchData() {
    try {
      const res = await ExtraServices.getExtras();
      if (res.status || res.status === 200) setExtras(res.data);
    } catch (error) {
      window.alert("Não foi possível resgatar os itens");
      console.log(error.message);
    }
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
    if (window.confirm("Realmente deseja deletar esse item ?")) {
      try {
        setIsRemovingItem(true);
        const res = await ExtraServices.deleteExtra(id);
        if (res.status || res.status === 200)
          window.alert("Item excluido com sucesso");
      } finally {
        setIsRemovingItem(false);
      }
    }
  }

  async function handleDeleteSelected() {
    if (window.confirm("Realmente deseja deletar os itens selecionados ?")) {
      setIsRemovingItem(true);
      const rest = await ExtraServices.deleteAll(selected);
      const message = rest
        ? "Itens removidos com sucesso"
        : "Não foi possível remover todos os itens selecionados";
      window.alert(message);
      setIsRemovingItem(false);
      isAllSelect && setIsAllSelect(false);
    }
  }

  useEffect(() => {
    if (!isRemovingItem) fetchData();
  }, [isRemovingItem]);

  return (
    <>
      <HotelsHeader />
      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-5">
            <TopOptionsBar type={"content-between"}>
              <Link className="btn btn-success" to="/hotels/extras/create">
                <FiPlus /> Add
              </Link>
              <button className="btn btn-danger" onClick={handleDeleteSelected}>
                <FiX /> Deletar Selecionados
              </button>
            </TopOptionsBar>
            <Table
              extras={extras}
              handleSingleDelete={handleSingleDelete}
              handleChangeSelectAll={handleChangeSelectAll}
              isAllSelect={isAllSelect}
              handleSelect={handleSelect}
            />
          </div>
        </div>
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
