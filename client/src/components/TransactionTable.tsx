import { FC } from 'react';
import { FaTrash } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import { IResponseTransactionLoader } from '../types/types';

const TransactionTable: FC = () => {
  const { transactions } = useLoaderData() as IResponseTransactionLoader;
  console.log(transactions);
  return (
    <>
      <div className="bg-slate-800 px-4 py-3 mt-4 rounded-md">
        <table className="w-full">
          <thead>
            <tr>
              <td className="font-bold">№</td>
              <td className="font-bold">Title</td>
              <td className="font-bold">Amount($)</td>
              <td className="font-bold">Category</td>
              <td className="font-bold">Date</td>
              <td className="text-right">Action</td>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transactions, ind) => (
              <tr key={transactions.id}>
                <td>{ind + 1}</td>
                <td>{transactions.title}</td>
                <td>{transactions.amount}</td>
                <td>{transactions.category.title}</td>
                <td>{transactions.createAt}</td>
                <td className="text-right">
                  <button className="btn hover:btn-red ml-auto">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TransactionTable;
