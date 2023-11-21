import { useCallback, useMemo } from 'react';
import { IFormValues } from './form';
import { Form, Input, Button, Space, message } from 'antd';
import { useAddPost } from './actions/form.mutation';
import {  useNavigate } from 'react-router-dom';
import useLocalization from '../../assets/lang';
import { Routes } from '../../router/routes';

const FormComponent = () => {
  const addPost = useAddPost();
  const navigate = useNavigate();
  const translate = useLocalization();

  const initialValues: IFormValues = {
    title: '',
    body: '',
  };
  const onSubmit = useCallback(
    async (values: IFormValues) => {
      if (!values.title || !values.body) {
        message.error('Please fill in all fields.');
        return;
      }

      await addPost.mutateAsync(values);
      navigate(Routes.table);
    },
    [addPost, navigate]
  );

  const onDirectToTable = useCallback(() => {
    navigate(Routes.table);
  }, [navigate]);

  const rules = useMemo(
    () => ({
      title: [
        {
          required: true,
          message: translate('input_required'),
        },
      ],
      body: [
        {
          min: 8,
          message: translate('input_min_length', {
            min: <span style={{ color: 'green' }}>8</span>,
          }),
        },
      ],
    }),
    [translate]
  );
  return (
    <div style={{ maxWidth: '800px', margin: 'auto', marginTop: '20px' }}>
      <Space direction='vertical' style={{ width: '100%' }} size='middle'>
        <Form
          initialValues={initialValues}
          name='basic'
          layout='vertical'
          onFinish={onSubmit}
        >
          <Form.Item name='title' label='Title' rules={rules.title}>
            <Input />
          </Form.Item>
          <Form.Item name='body' label='body' rules={rules.body}>
            <Input />
          </Form.Item>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form>

        <Button onClick={onDirectToTable}>Direct to table</Button>
      </Space>
    </div>
  );
};

export default FormComponent;
