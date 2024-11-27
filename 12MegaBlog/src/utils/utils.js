const getInitials = (fullName) => {
  // Split the full name by spaces
  const nameParts = fullName.trim().split(" ");

  // Handle cases with no name or single name
  if (nameParts.length === 0) return "";

  const firstNameInitial = nameParts[0]?.charAt(0).toUpperCase() || ""; // First name's initial
  const lastNameInitial = nameParts[1]?.charAt(0).toUpperCase() || ""; // Last name's initial

  // Return initials combined
  return `${firstNameInitial}${lastNameInitial}`;
};

export { getInitials };
