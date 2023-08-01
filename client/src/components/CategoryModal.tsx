import { FC } from 'react';
import { Form } from 'react-router-dom';

interface IProps {
  id?: number;
  title?: string;
  setCategoryTitle?: (title: string) => void;
  setIsEdit?: (isEdit: boolean) => void;
  type: 'post' | 'patch';
  setVisibleModal: (visible: boolean) => void;
}

const CategoryModal: FC<IProps> = ({
  id,
  title,
  setCategoryTitle,
  setIsEdit,
  type,
  setVisibleModal,
}) => {
  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (setCategoryTitle) {
      setCategoryTitle(e.target.value);
    }
  };
  const handleCloseModal = () => {
    setVisibleModal(false);
    if (setIsEdit) setIsEdit(false);
  };
  return (
    <div
      className="fixed top-0 left-0 bottom-0 right-0 w-full h-full 
    bg-black/50 flex justify-center items-center"
    >
      <Form
        action="/categories"
        method={type}
        onSubmit={handleCloseModal}
        className="grid w-[300px] gap-2 rounded-md bg-slate-900 p-5"
      >
        <label htmlFor="title">
          <small>Category Title</small>
          <input
            className="input w-full"
            type="text"
            name="title"
            placeholder="Title..."
            autoFocus={true}
            value={title}
            onChange={handleChangeTitle}
          />
          <input type="hidden" name="id" value={id} />
        </label>
        <div className="flex items-center gap-2">
          <button className="btn btn-green" type="submit">
            {type === 'patch' ? 'Save' : 'Create'}
          </button>
          <button onClick={handleCloseModal} className="btn btn-red">
            Close
          </button>
        </div>
      </Form>
    </div>
  );
};

export default CategoryModal;
