import { useCallback } from 'react';
import { IFormValues } from './form';
import { Form, Input, Button, Space, message } from 'antd';
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
      if (!values.title || !values.body) {
        message.error('Please fill in all fields.');
        return;
      }

      await addPost.mutateAsync(values);
      navigate('/table');
    },
    [addPost, navigate]
  );

  const onDirectToTable = useCallback(() => {
    navigate('/table');
  }, [navigate]);

  return (
    <div style={{ maxWidth: '800px', margin: 'auto', marginTop: '20px' }}>
      <Space direction="vertical" style={{ width: '100%' }} size="middle">
        <Form
          initialValues={initialValues}
          name="basic"
          layout="vertical"
          onFinish={onSubmit}
        >
          <Form.Item
            name="title"
            label="Title"
            rules={[{ required: true, message: 'Please input the title!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="body"
            label="body"
            rules={[{ required: true, message: 'Please input the body!' }]}
          >
            <Input />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form>

        <Button onClick={onDirectToTable}>Direct to table</Button>
      </Space>
    </div>
  );
};

export default FormComponent;
