import { onValue, ref } from 'firebase/database';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import person from '../../../assets/imgs/person.png';
import { useUserContext } from '../../../contexts/UserProvider';
import { realTimedb } from '../../../firebase';
import { image_url } from '../../../utils/constants';
const Notifications = ({ setNotsCounter, notsCounter, setKey }) => {
  const [nots, setNots] = useState([]);

  const {
    userInfo: { id },
  } = useUserContext();

  useEffect(() => {
    onValue(ref(realTimedb), (snapshot) => {
      const data = snapshot.val();
      // console.log(data.notification.types);
      let a = [];
      let x = 0;
      if (data !== null) {
        for (let i in data.notification.types) {
          if (data.notification.types[i].user_id == id) {
            setKey((a) => {
              return [...a, i];
            });
            a.push(data.notification.types[i]);
            if (data.notification.types[i].isRead == 0) {
              x++;
            }
          }
        }
        setNots(a);
        setNotsCounter(x);
      }
    });
  }, [id]);

  return (
    <ul className='dropdown-menu bill bg-primary text-white overflow-auto  '>
      <li className='py-2'>
        <h5 className='text-end mx-3'>الإشعارات</h5>
      </li>

      {nots &&
        nots.length > 0 &&
        nots.map((not, index) => {
          return (
            <li className='color-in-background mx-1 my-2 borderd' key={index}>
              <a className='dropdown-item' href='#'>
                <div className='d-flex '>
                  <div className='d-flex flex-column text-primary '>
                    <span className='text-end text-wrap fs-6 fw-bold '>
                      {not.message}
                    </span>
                    <span className='fw-bold'>{not.title}</span>
                  </div>
                </div>
              </a>
            </li>
          );
        })}
    </ul>
  );
};

export default Notifications;
