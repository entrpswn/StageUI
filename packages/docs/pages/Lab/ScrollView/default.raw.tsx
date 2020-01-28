import React from 'react';
import { Block } from '@flow-ui/core';
import { ScrollView } from '@flow-ui/lab';

export default () => {
    return (
        <ScrollView 
            mode="always"
            size="m"
            shape="round"
            children={"Text ".repeat(200)}
        />
    )
}