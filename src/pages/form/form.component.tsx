import { useCallback } from 'react';
import { IFormValues } from './form';
import { Form, Input, Button, Space } from 'antd';
import { useAddPost } from './actions/form.mutation';
import { useNavigate } from 'react-router-dom';

const FormComponent = () => {
  const addPost = useAddPost();
  const navigate = useNavigate();

  const initialValues: IFormValues = {
    title: '',
    body: '',
  };

  const onSubmit = useCallback(
    async (values: IFormValues) => {
      await addPost.mutateAsync(values);
      navigate('/table');
    },
    [addPost, navigate]
  );

  const onDirectToTable = useCallback(() => {
    navigate('/table');
  }, [navigate]);

  return (
    <Space direction="vertical" style={{ width: '100%' }} size="middle">
      <Form initialValues={initialValues} name="basic" layout="vertical" onFinish={onSubmit}>
        <Form.Item name="title" label="Title">
          <Input />
        </Form.Item>
        <Form.Item name="body" label="body">
          <Input />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>

      <Button onClick={onDirectToTable}>
        Direct to table
      </Button>
    </Space>
  );
};

export default FormComponent;
