import { Select } from 'antd';
import { useState, useEffect } from 'react';

const { Option } = Select;

const ActivitySelect = ({ onSelectActivity, times, defaultTime }) => {
  const options = Object.keys(times).map(name => name.split('_').join(' '));
  const [selectedActivity, setSelectedActivity] = useState();


  const onChange = value => {
    const key = value.split(' ').join('_').toLowerCase();
    setSelectedActivity(value);
    onSelectActivity(times[key]);
  }

  useEffect(() => {
    if (times && defaultTime)
      onSelectActivity(times[`${defaultTime}`])
  }, [times, defaultTime])

  return (
    <Select
      showSearch
      style={{ width: 200, float: 'left', margin: '0 0 20px' }}
      defaultValue={defaultTime}
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