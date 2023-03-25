import { Select } from 'antd';
import { useState, useEffect } from 'react';

import times from 'sections/Schedule/times';
import timesBasket from 'sections/Schedule/times_basket';

const { Option } = Select;

const ActivitySelect = ({ onSelectActivity, timesKey }) => {
  const currentTimes = timesKey === 'timesBasket' ? timesBasket : times;

  const options = Object.keys(currentTimes).map(name => name.split('_').join(' '));
  const [selectedActivity, setSelectedActivity] = useState();


  const onChange = value => {
    const key = value.split(' ').join('_').toLowerCase();
    setSelectedActivity(value);
    onSelectActivity(currentTimes[key]);
  }

  useEffect(() => {
    onSelectActivity(
      timesKey === 'timesBasket' ? currentTimes.escuelita : currentTimes.funcional
    );
  }, [])

  return (
    <Select
      showSearch
      style={{ width: 200, float: 'left', margin: '0 0 20px' }}
      defaultValue={timesKey === 'timesBasket' ? 'escuelita' : 'funcional'}
      value={selectedActivity}
      placeholder="Seleccionar actividad"
      optionFilterProp="children"
      onChange={onChange}
      filterOption={(input, option) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
    >
      {options.map(option => (
        <Option value={option} key={option}>{option.toUpperCase()}</Option>
      ))}
    </Select>
  )
};

export default ActivitySelect;