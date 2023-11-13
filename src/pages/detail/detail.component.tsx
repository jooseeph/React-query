
import { useCallback } from 'react';
import { Form, Input, Button } from 'antd';
import { useUpdatePost } from './actions/detail.mutation';
import { useNavigate, useParams } from 'react-router-dom';
import { IFormValues } from '../form/form';

const UpdateFormComponent = () => {
  const updatePost = useUpdatePost();
  const navigate = useNavigate();
  const params = useParams();

  const postId = Number(params.id);

  const onSubmit = useCallback(
    async (values: IFormValues) => {
      await updatePost.mutateAsync({ postId, updatedData: values });
      navigate('/table');
    },
    [updatePost, navigate, postId]
  );

  return (
    <Form name="basic" layout="vertical" onFinish={onSubmit}>
      <Form.Item name="title" label="Title">
        <Input />
      </Form.Item>
      <Form.Item name="body" label="Body">
        <Input />
      </Form.Item>
      <Button type="primary" htmlType="submit">
        Update
      </Button>
    </Form>
  );
};

export default UpdateFormComponent;
