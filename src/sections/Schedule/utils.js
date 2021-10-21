export const getAvailableTimes = times => {
  const availableTimes = new Set();

  Object.entries(times).forEach(([_, dayTimes]) => {
    dayTimes.forEach((daytime) => {
      availableTimes.add(`${daytime.start_time} a ${daytime.end_time}`)
    });
  });

  return availableTimes;
}

export const isAvailableTimeOnWeekDay = (times, timeKey, weekDay) => (
  Object.values(times[weekDay]).some(time => getTimeKey(time) === timeKey)
)

export const getWeekDaysAvailableOnTime = (times, timeKey) => {
  const weekDaysAvailableOnTime = {};

  Object.keys(times).forEach(dayKey => {
    weekDaysAvailableOnTime[dayKey] = isAvailableTimeOnWeekDay(times, timeKey, dayKey)
  })

  return weekDaysAvailableOnTime;
};

export const getTimeKey = time => `${time.start_time} a ${time.end_time}`;

export const orderAvailableTimes = availableTimes => {
  const entries = [];

  for (const member of availableTimes) {
    entries.push(member);
  }

  availableTimes.clear();


  const orderedEntries = entries.sort((a, b) => {
    const [startTime_a] = a.split(' a ');
    const [hour_a, minutes_a] = startTime_a.split(':').map(e => parseInt(e));

    const [startTime_b] = b.split(' a ');
    const [hour_b, minutes_b] = startTime_b.split(':').map(e => parseInt(e));;

    if (hour_a >= hour_b) {
      if (hour_a > hour_b) return 1;
      if (minutes_a >= minutes_b) return 1;
      return -1;
    }

    return -1;
  });

  for (const entry of orderedEntries) {
    availableTimes.add(entry);
  }

  return availableTimes;
}

  export const getColumns = (CheckCircleOutlined) => [
    {
      title: 'Hora',
      dataIndex: 'time',
      key: 'time',
      fixed: 'left',
    },
    {
      title: 'Lunes',
      dataIndex: 'mon',
      key: 'mon',
      render: present => present && <CheckCircleOutlined style={{ color: '#e96264'}}/>,
    },
    {
      title: 'Martes',
      dataIndex: 'tu',
      key: 'tu',
      render: present => present && <CheckCircleOutlined style={{ color: '#e96264'}}/>,
    },
    {
      title: 'Miércoles',
      dataIndex: 'wed',
      key: 'web',
      render: present => present && <CheckCircleOutlined style={{ color: '#e96264'}}/>,
    },
    {
      title: 'Jueves',
      dataIndex: 'th',
      key: 'th',
      render: present => present && <CheckCircleOutlined style={{ color: '#e96264'}}/>,
    },
    {
      title: 'Viernes',
      dataIndex: 'fri',
      key: 'fri',
      render: present => present && <CheckCircleOutlined style={{ color: '#e96264'}}/>,
    },
    {
      title: 'Sábado',
      dataIndex: 'sat',
      key: 'sat',
      render: present => present && <CheckCircleOutlined style={{ color: '#e96264'}}/>,
    },
    {
      title: 'Domingo',
      dataIndex: 'sun',
      key: 'sun',
      render: present => present && <CheckCircleOutlined style={{ color: '#e96264'}}/>,
    },
  ];