import { useCallback } from 'react';
import { Form, Input, Button, message } from 'antd';
import { useUpdatePost } from './actions/update.mutation';
import { useNavigate, useParams } from 'react-router-dom';
import { IFormValues } from '../form/form';

const UpdateFormComponent = () => {
  const updatePost = useUpdatePost();
  const navigate = useNavigate();
  const params = useParams();

  const postId = Number(params.id);

  const onSubmit = useCallback(
    async (values: IFormValues) => {
      if (!values.title || !values.body) {
        message.error('Please fill in all fields.');
        return;
      }

      await updatePost.mutateAsync({ postId, updatedData: values });
      navigate('/table');
    },
    [updatePost, navigate, postId]
  );

  return (
    <div style={{ maxWidth: '800px', margin: 'auto', marginTop: '20px' }}>
      <Form name='basic' layout='vertical' onFinish={onSubmit}>
        <Form.Item
          name='title'
          label='Title'
          rules={[{ required: true, message: 'Please input the title!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name='body'
          label='Body'
          rules={[{ required: true, message: 'Please input the body!' }]}
        >
          <Input />
        </Form.Item>
        <Button type='primary' htmlType='submit'>
          Update
        </Button>
      </Form>
    </div>
  );
};

export default UpdateFormComponent;
