export default function getStudentIdsSum(list) {
    const initialValue = 0;
    return list.reduce((accumulator, item) => accumulator + item.id, initialValue);
}
