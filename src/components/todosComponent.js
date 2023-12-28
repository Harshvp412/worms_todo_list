import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTodos, deleteTodo, addTodo } from "../store/action/todosAction";
import { Divider, Table, Input, Space, Button } from "antd";

const { Column } = Table;

export const TodosComponent = () => {
  const [deleteId, setDeleteId] = useState();
  const [newTodo, setNewTodo] = useState("");

  const handleDelete = (record) => {
    setDeleteId(record.id);
  };

  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      const todo = {
        id: todos.data.length + 1,
        title: newTodo,
      };
      dispatch(addTodo(todo));
      setNewTodo("");
    }
  };

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  useEffect(() => {
    if (deleteId) {
      dispatch(deleteTodo(deleteId));
    }
  }, [deleteId, dispatch]);

  return (
    <div>
      <h1>Todos</h1>
      <Space.Compact style={{ width: "95%" }}>
        <Input
          placeholder="Enter todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <Button type="primary" onClick={handleAddTodo}>
          Add
        </Button>
      </Space.Compact>
      <div>
        <Divider />
        <Table dataSource={todos.data}>
          <Column title="Sr. No" dataIndex="id" key="id" />
          <Column title="Title" dataIndex="title" key="title" />
          <Column
            title="Action"
            key="action"
            render={(_, record) => (
              <Space size="middle">
                <Button onClick={() => handleDelete(record)}>Delete</Button>
              </Space>
            )}
          />
        </Table>
      </div>
    </div>
  );
};
