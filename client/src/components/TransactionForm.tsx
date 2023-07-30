import { FC } from 'react';
import { FaPlus } from 'react-icons/fa';
import { Form } from 'react-router-dom';

const TransactionForm: FC = () => {
  return (
    <div className="rounded-md bg-slate-800 p-4">
      <Form method="post" action="/transactions" className="grid gap-2">
        <label className="grid" htmlFor="title">
          <span>Title</span>
          <input
            className="input"
            type="text"
            placeholder="Title..."
            name="title"
            required
          />
        </label>
        <label className="grid" htmlFor="amount">
          <span>Amount</span>
          <input
            className="input"
            type="number"
            placeholder="Amount..."
            name="amount"
            required
          />
        </label>
        <label htmlFor="category" className="grid">
          <span>Category</span>
          <select className="input" name="category" required>
            <option value="1">Salary 1</option>
            <option value="2">Salary 2</option>
            <option value="3">Salary 3</option>
          </select>
        </label>
        <button
          //onClick={() => setVisibleModal(true)}
          className="mt-2 flex max-w-fit items-center gap-2
      text-white/50 hover:text-white"
        >
          <FaPlus />
          <span>Manage Categories:</span>
        </button>
        <div className="flex gap-4 items-center">
          <label className="cursor-pointer flex items-center gap-2">
            <input
              type="radio"
              name="type"
              value={'income'}
              className="form-radio text-blue-600"
            />
            <span>Income</span>
          </label>
          <label className="cursor-pointer flex items-center gap-2">
            <input
              type="radio"
              name="type"
              value={'expense'}
              className="form-radio text-blue-600"
            />
            <span>Expense</span>
          </label>
        </div>
        <button className="btn btn-green max-w-fit mt-2">Submit</button>
      </Form>
    </div>
  );
};

export default TransactionForm;
