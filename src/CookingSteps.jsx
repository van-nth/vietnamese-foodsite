import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Steps, Button, message } from 'antd';

import CookingTable from './CookingTable';
import gao_tam from './imgs/gaotam.jpeg';
import cach_nau_com from './imgs/cach_nau_com.jpeg';
import com_tam from './imgs/com_tam.jpeg';
import mon_an_kem from './imgs/mon_an_kem.webp';
import nuong_suon from './imgs/nuong_suon.webp';
import suon_nuong from './imgs/suon_nuong.jpeg';
import lam_nuoc_mam from './imgs/lam_nuoc_mam.jpeg';
import lam_mo_hanh from './imgs/lam_mo_hanh.jpeg';
import com_tam_done from './imgs/com_tam_done.webp';

const { Step } = Steps;

const steps = [
  {
    id: "first",
    title: 'First',
    content: 'Nấu cơm',
    headings: [
      {
        id: "nguyen-lieu-1",
        name: "原料",
      },
      {
        id: "cach-nau-1",
        name: "做法"
      },
      {
        id: "hoan-thanh-1",
        name: "完成"
      }
    ],
    imgs: [
      {
        id: 'nau-1',
        src: gao_tam,
        desc: 'Gạo tấm ngon'
      },
      {
        id: 'nau-2',
        src: cach_nau_com,
        desc: 'Hấp bằng lửa nhỏ'
      },
      {
        id: 'nau-3',
        src: com_tam,
        desc: 'Cơm tấm'
      }
    ]
  },
  {
    id: "second",
    title: 'Second',
    content: 'Làm các món ăn kèm',
    img:'./imgs/gaotam.jpeg',
    headings: [
      {
        id: "nguyen-lieu-2",
        name: "原料",
      },
      {
        id: "cach-nau-2",
        name: "做法"
      },
      {
        id: "hoan-thanh-2",
        name: "完成"
      }
    ],
    imgs: [
      {
        id: 'nau-4',
        src: mon_an_kem,
        desc: 'sườn heo, trứng gà, ...'
      },
      {
        id: 'nau-5',
        src: nuong_suon,
        desc: 'Nướng bằng than'
      },
      {
        id: 'nau-6',
        src: suon_nuong,
        desc: 'Sườn nướng'
      }
    ]
  },
  {
    id: "third",
    title: 'Third',
    content: 'Pha nước mắm, làm mỡ hành',
    sources: [
      {
        id: 'nau-7',
        src: lam_nuoc_mam,
        desc: '...'
      },
      {
        id: 'nau-8',
        src: lam_mo_hanh,
        desc: '...'
      }
    ]
  },
  {
    id: "last",
    title: 'Last',
    content: 'Bày ra dĩa và thưởng thức',
    sources: [
      {
        id: 'nau-xong',
        src: com_tam_done,
        desc: '...'
      }
    ]
  },
];

const CookingSteps = () => {
  const [current, setCurrent] = React.useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <div className="cooking-steps mx-4 my-3 md:mx-20 overscroll-x-none">
      <Steps current={current}>
        {steps.map(item => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content px-4 py-3 md:px-6 md:py-4 my-4 overflow-hidden text-sm md:text-xl">
        <h2 className="text-xl md:text-3xl text-blue-600">{steps[current].content}</h2>
        <CookingTable steps={steps} current={current}/>
      </div>
      
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
    </div>
  );
};

export default CookingSteps;