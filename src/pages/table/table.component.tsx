
import { generateGuid } from '../../core/helpers/generate-guid';
import { Table, Button, Space, Popconfirm, message } from 'antd';
import { DeletePost, usePosts } from './actions/table.mutation';
import { Link } from 'react-router-dom';
import CreateFormButton from '../../core/helpers/create-form-button';
import { DeleteAllPosts } from './actions/table.mutation'; 

const TableComponent = () => {
  const { data, refetch } = usePosts();
  const deletePosts = DeletePost();
  const deleteAllPosts = DeleteAllPosts(); 

  const renderActions = (text: string, record: any) => (
    <Space size="middle">
      <Link to={`/post/${record.id}`}>Update</Link>
      <Popconfirm
        title="Are you sure delete this post?"
        onConfirm={() => handleDelete(record.id)}
        okText="Yes"
        cancelText="No"
      >
        <Button type="link" danger>
          Delete
        </Button>
      </Popconfirm>
    </Space>
  );

  const handleDelete = async (postId: number) => {
    try {
      await deletePosts.mutateAsync(postId);
      message.success('Post deleted successfully');
      refetch();
    } catch (error) {
      message.error('Error deleting post');
    }
  };
  const handleDeleteAll = async () => {
    try {
      await deleteAllPosts.mutateAsync();
      message.success('All posts deleted successfully');
      refetch();
    } catch (error) {
      message.error('Error deleting all posts');
    }
  };
  
  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
      width: '80px',
    },
    {
      title: 'title',
      dataIndex: 'title',
    },
    {
      title: 'body',
      dataIndex: 'body',
      ellipsis: true,
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      render: renderActions,
    },
  ];

  return (
    <>
      <Table columns={columns} pagination={false} rowKey={generateGuid} dataSource={data} />
      <Space>
        <CreateFormButton />
        <Button type="primary" onClick={handleDeleteAll}>
          Delete All
        </Button>
      </Space>
    </>
  );
};

export default TableComponent;