import React from "react";
import {
  formatCurrency,
  formatDateToLocaleString,
  getAllMatchingItems,
} from "../helper";
import { Link, useFetcher } from "react-router-dom";
import { TrashIcon } from "@heroicons/react/24/solid";

const ExpenseItem = ({ expenses, showBudget }) => {
  const fetcher = useFetcher();
  const budget = getAllMatchingItems({
    category: "budgets",
    key: "id",
    value: expenses.budgetId,
  })[0];

  console.log(budget);

  return (
    <>
      <td>{expenses.name}</td>
      <td>{formatCurrency(expenses.amount)}</td>
      <td>{formatDateToLocaleString(expenses.createdAt)}</td>
      {showBudget && (
        <td>
          <Link
            to={`/budgets/${budget.id}`}
            style={{ "--accent": budget.color }}
          >
            {budget.name}
          </Link>
        </td>
      )}
      <td>
        <fetcher.Form method="post">
          <input type="hidden" name="_action" value="deleteExpense" />
          <input type="hidden" name="expenseId" value={expenses.id} />
          <button
            className="btn btn--warning"
            type="submit"
            aria-label={`Delete ${expenses.name}`}
          >
            <TrashIcon width={20} />
          </button>
        </fetcher.Form>
      </td>
    </>
  );
};

export default ExpenseItem;
