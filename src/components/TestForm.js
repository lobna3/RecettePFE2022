import moment from "moment";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import AddCategModal from "../../components/AddCategModal";
import {
  deleteCategory,
  getCategoriesApi,
  updateCategory,
} from "../../redux/actions/category.action";
import Swal from "sweetalert2";
import EditCategModal from "../../components/EditCategModal";
const Categories = () => {
  const dispatch = useDispatch();
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const openAdd = () => {
    setShowAdd(true);
  };
  const closeAdd = () => {
    setShowAdd(false);
  };

  const openEdit = (elm) => {
    setShowEdit(true);
    dispatch(updateCategory(elm));
  };
  const closeEdit = () => {
    setShowEdit(false);
  };
  useEffect(() => {
    dispatch(getCategoriesApi());
  }, []);
  const { list, loading } = useSelector((state) => state.category);
  return (
    <div className="w-full h-full container flex flex-col">
      <div className="flex flex-row w-full h-25 justify-end justify-items-center py-6">
        <AddCategModal show={showAdd} closeModal={closeAdd} />
        <EditCategModal show={showEdit} closeModal={closeEdit} />

        <button
          style={{ maxWidth: "16em" }}
          type="button"
          className="py-2 mx-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
          onClick={openAdd}
        >
          Ajouter
        </button>
      </div>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Nom Categorie
                    </th>

                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Date d'ajout
                    </th>

                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {list.map((elm) => (
                    <tr key={elm._id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {elm.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              {/* jane.cooper@example.com */}
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap">
                        {moment(elm.createdAt).format("DD/MM/YYYY")}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium flex ">
                        <button
                          type="button"
                          className="py-2 mx-2 px-4 flex justify-center items-center 
                           bg-green-500 hover:bg-green-600 focus:ring-green-500 focus:ring-offset-green-200 
                           text-white w-full transition ease-in duration-200 text-center text-base font-semibold
                            shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  w-1/2 h-12 rounded-lg
                             "
                          onClick={() => {
                            openEdit(elm);
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                            />
                          </svg>
                        </button>
                        <button
                          type="button"
                          className="py-2 px-4 flex justify-center items-center  bg-red-500 hover:bg-red-600 focus:ring-red-600 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  w-12 h-12 rounded-lg "
                          onClick={() => {
                            Swal.fire({
                              title:
                                "Vous etes sure de supprimer cette categorie ?",
                              showCancelButton: true,
                              confirmButtonText: `Confirmer`,
                              cancelButtonText: `Annuler`,
                            }).then((result) => {
                              /* Read more about isConfirmed, isDenied below */
                              if (result.isConfirmed) {
                                dispatch(deleteCategory(elm._id));
                              }
                            });
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
