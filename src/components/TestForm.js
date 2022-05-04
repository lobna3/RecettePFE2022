<select
  value={selectedCourse}
  onChange={(event) => {
    setSelectedCourse(event.target.value);
  }}
  className="block w-52 text-gray-700 py-2 px-3 border border-gray-300 bg-white 
  rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
  name="animals"
>
  <option selected={true}>Selectionner un cours</option>)
  {courseList.map((elm) => (
    <option value={elm._id}>{elm.title}</option>
  ))}
</select>;
