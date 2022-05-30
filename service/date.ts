const getDateInstance = (day: string | number | Date): Date => {
    if (!day) {
        return new Date()
    }
    if (day instanceof Date) {
        return day
    }

    return new Date(day);
}

const getDate = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const dayOfMonth = date.getDate();
    const dayOfWeek = date.getDay();
    return {
        year,
        month,
        dayOfMonth,
        dayOfWeek,
    }
}

const getFirstDateOfMonth = (currentDate: Date) => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    return new Date(year, month, 1);
}

const getLastDateOfMonth = (currentDate: Date) => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    return new Date(year, month, 1);
}

export default {};
