// import React from 'react';

import {useState} from 'react';
import {useForm} from '@mantine/form';
// import {Modal} from '@mantine/core';

import { Button, Modal, Group, TextInput, Textarea } from "@mantine/core";

function AddTodo(){
    const [open, setOpen] = useState(false)

    const form = useForm({
        initialValues:{ 
            title :'',
            body: "",
        },
    });

    return (

        <>
          {/* <Modal opened={open} onClose={() => setOpen(false)} title="Create todo">
            
              <Button type="submit">Create todo</Button>
            
          </Modal>
     */}
          {/* <div  style={{ display: 'flex', justifyContent: 'center', marginTop: '12px' }}>
            <Button fullWidth mb={12} onClick={() => setOpen(true)}>
              ADD TODO
            </Button>
          </div> */}
        <Modal opened = {open} onClose={() => setOpen(false)}> </Modal>  
        </>
      );



}


export default AddTodo;