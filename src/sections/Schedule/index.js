import { useState } from 'react';
import { Table } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';

import ActivitySelect from './comps/Select';
import { getAvailableTimes, orderAvailableTimes, getWeekDaysAvailableOnTime, getColumns } from './utils';

const Schedule = () => {
  const [timesData, setTimesData] = useState([]);
  const columns = getColumns(CheckCircleOutlined);

  const onSelectActivity = times => {
    const auxTimesData = [];
    const availableTimes = orderAvailableTimes(getAvailableTimes(times));

    availableTimes.forEach(availableTime => {
      auxTimesData.push({
        time: availableTime,
        ...getWeekDaysAvailableOnTime(times, availableTime)
      });
    });

    setTimesData(auxTimesData);
  }

  return (
    <div className='schedule-container' style={{width: '100vw', maxWidth: '1400px'}} >
      <ActivitySelect onSelectActivity={onSelectActivity}/>
      <Table columns={columns} dataSource={timesData} pagination={false} scroll={{ x: 1400 }} />
    </div>
  );
};

export default Schedule;
