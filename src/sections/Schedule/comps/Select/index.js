import { Select } from 'antd';
import { useState, useEffect } from 'react';

import times from 'sections/Schedule/times';

const { Option } = Select;

const ActivitySelect = ({ onSelectActivity }) => {
  const options = Object.keys(times);
  const [selectedActivity, setSelectedActivity] = useState();

  const onChange = value => {
    setSelectedActivity(value);
    onSelectActivity(times[value]);
  }

  useEffect(() => {
    onSelectActivity(times.funcional);
  }, [])

  return (
    <Select
      showSearch
      style={{ width: 200, float: 'left', margin: '0 0 20px' }}
      defaultValue='funcional'
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