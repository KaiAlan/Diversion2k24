
// export the default button and check for the active with children body
export default function TabButton ( { children, isSelected, ...props }: any ) {
    return (
        <button className={isSelected ? 'active': undefined } {...props}> { children } </button>
    );
}


