import { Label, FilterInput } from './Flter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { setStatusFilter } from 'redux/filterSlice';


export function Filter() {
  const filter = useSelector(state => state.filters);
  const dispatch = useDispatch();

  const onChange = e => {
    dispatch(setStatusFilter(e.currentTarget.value));
  };

  return (
    <form >
      <Label htmlFor="filter-input">
        Find contacts by name
        <FilterInput id="filter-input" type="text" value={filter} onChange={onChange} />
      </Label>
    </form>
  );
}