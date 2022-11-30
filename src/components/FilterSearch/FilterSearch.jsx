import css from 'components/FilterSearch/filtersearch.module.css';
const FilterSearch = ({ value, onChange }) => {
  return (
    <div className={css.find}>
      <label>Find contacts by name</label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        className={css.search}
      />
    </div>
  );
};
export default FilterSearch;
