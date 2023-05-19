const calculateAge = (dateOfBirth: Date): number => {
  const dob = new Date(dateOfBirth);
  const now = new Date();

  let age = now.getFullYear() - dob.getFullYear();
  const monthDiff = now.getMonth() - dob.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < dob.getDate())) {
    age--;
  }
  if (age < 0) return 0;
  return age;
};

const formatDate = (dateString: string): string => {
  console.log('FORMAT', dateString);
  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
};

export { calculateAge, formatDate };
