import { FC } from 'react';
import { FaPlus } from 'react-icons/fa';
import { Form, useLoaderData } from 'react-router-dom';
import { IResponseTransactionLoader } from '../types/types';

const TransactionForm: FC = () => {
  const { categories } = useLoaderData() as IResponseTransactionLoader;
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
        {categories.length ? (
          <label htmlFor="category" className="grid">
            <span>Category</span>
            <select className="input" name="category" required>
              {categories.map((ctg) => (
                <option key={ctg.id} value={ctg.id}>
                  {ctg.title}
                </option>
              ))}
            </select>
          </label>
        ) : (
          <h1 className="mt-1 text-red-300">
            To coutinue create a category first
          </h1>
        )}
        <button
          //onClick={() => setVisibleModal(true)}
          className="flex max-w-fit items-center gap-2
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
