import { Filter } from '../../types/Filter';

type Props = {
  query: string,
  setQuery: React.Dispatch<React.SetStateAction<string>>,
  filter: string,
  setFilter: React.Dispatch<React.SetStateAction<Filter>>,
};

export const TodoFilter: React.FC<Props> = (
  {
    query,
    setQuery,
    filter,
    setFilter,
  },
) => {
  const clearQuery = () => {
    setQuery('');
  };

  return (
    <form className="field has-addons">
      <p className="control">
        <span className="select">
          <select
            data-cy="statusSelect"
            name="filter"
            onChange={(e) => setFilter(e.target.value as Filter)}
            value={filter}
          >
            <option value={Filter.ALL}>All</option>
            <option value={Filter.ACTIVE}>Active</option>
            <option value={Filter.COMPLETED}>Completed</option>
          </select>
        </span>
      </p>

      <p className="control is-expanded has-icons-left has-icons-right">
        <input
          name="query"
          data-cy="searchInput"
          type="text"
          className="input"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <span className="icon is-left">
          <i className="fas fa-magnifying-glass" />
        </span>

        {query.length !== 0
        && (
          <span className="icon is-right" style={{ pointerEvents: 'all' }}>
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button
              data-cy="clearSearchButton"
              type="button"
              className="delete"
              onClick={() => clearQuery()}
            />
          </span>
        )}
      </p>
    </form>
  );
};
