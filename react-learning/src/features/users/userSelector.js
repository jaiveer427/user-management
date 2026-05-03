export const selectUsersState = (state) => state.users;

export const selectFilteredUsers = (state) => {
  const {
    list,
    search,
    roleFilter
  } = state.users;

  return list.filter(user => {
    const matchSearch =
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase());

    const matchRole =
      roleFilter === "All" ||
      user.role === roleFilter;

    return matchSearch && matchRole;
  });
};

export const selectPaginatedUsers = (state) => {
  const users = selectFilteredUsers(state);

  const {
    currentPage,
    pageSize
  } = state.users;

  const start = (currentPage - 1) * pageSize;
  const end = start + pageSize;

  return users.slice(start, end);
};