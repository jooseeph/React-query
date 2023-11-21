import { useCallback, useMemo } from 'react';
import { Form, Input, Button, message } from 'antd';
import { useUpdatePost } from './actions/update.mutation';
import { useNavigate, useParams } from 'react-router-dom';
import { IFormValues } from '../form/form';
import { Routes } from '../../router/routes';
import useLocalization from '../../assets/lang';

const UpdateFormComponent = () => {
  const updatePost = useUpdatePost();
  const navigate = useNavigate();
  const params = useParams();
  const translate = useLocalization();

  const postId = Number(params.id);

  const onSubmit = useCallback(
    async (values: IFormValues) => {
      if (!values.title || !values.body) {
        message.error('Please fill in all fields.');
        return;
      }

      await updatePost.mutateAsync({ postId, updatedData: values });
      navigate(Routes.table);
    },
    [updatePost, navigate, postId]
  );
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
      <Form name='basic' layout='vertical' onFinish={onSubmit}>
        <Form.Item name='title' label='Title' rules={rules.title}>
          <Input />
        </Form.Item>
        <Form.Item name='body' label='Body' rules={rules.body}>
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
