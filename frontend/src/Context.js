import { createContext, useState } from "react";
import { api } from "./util";

export const MultiContext = createContext();

export default function Context({ children }) {
  const [loading, setLoading] = useState(false);

  const [things, setThings] = useState([]);

  const addThing = (e, name) => {
    e.preventDefault();
    setLoading(true);
    api("add_thing", { name: name }, (data) => {
      setLoading(false);
      setThings(data.things);
    });
  };

  const getThings = () => {
    setLoading(true);
    api("get_things", {}, (data) => {
      setLoading(false);
      setThings(data.things);
    });
  };

  const editThing = (e, id, name) => {
    e.preventDefault();
    setLoading(true);
    api("edit_thing", { id: id, name: name }, (data) => {
      setLoading(false);
      setThings(data.things);
    });
  };

  const deleteThing = (id) => {
    setLoading(true);
    api("delete_thing", { id: id }, (data) => {
      setLoading(false);
      setThings(data.things);
    });
  };

  const contextValue = {
    loading: loading,
    setLoading: setLoading,

    things: things,
    setThings: setThings,
    addThing: addThing,
    getThings: getThings,
    editThing: editThing,
    deleteThing: deleteThing,
  };

  return (
    <MultiContext.Provider value={contextValue}>
      {children}
    </MultiContext.Provider>
  );
}
