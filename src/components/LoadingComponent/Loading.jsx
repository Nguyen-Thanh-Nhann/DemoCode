import React from 'react';
import { Spin } from 'antd';

const Loading = ({ children, isPending, deday = 200 }) => {
    return (
        <Spin spinning={isPending} delay={deday}>
            {children}
        </Spin>
    )
}

export default Loading;
