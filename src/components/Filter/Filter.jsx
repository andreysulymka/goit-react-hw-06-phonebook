import PropTypes from 'prop-types';
import { Label, FilterInput } from './Flter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { setStatusFilter } from 'redux/filterSlice';


export function Filter() {

     const filter = useSelector(state => state.filter);
    const dispatch = useDispatch();

    const onChange = e => {
        dispatch(setStatusFilter(e.currentTarget.value));
    }

    return (
        <form action="">
            <Label htmlFor="">Find contacts by name
                <FilterInput type="text" value={filter} onChange={onChange} />
            </Label>
        </form>
    
    )
}

Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired
};