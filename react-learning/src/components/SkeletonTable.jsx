const SkeletonTable = () => {
    return (
        <div className="card">
            {/* A "Header" skeleton */}
            <div className="skeleton" style={{ height: '48px', width: '100%', marginBottom: '20px', borderRadius: '4px' }} />

            {/* A "Row" skeleton */}
            {[1, 2, 3, 4,5].map(i => (
                <div key={i} className="skeleton" style={{
                    height: "44px",
                    marginBottom: "10px",
                    borderRadius: "8px",
                    width: "100%"
                }} />
            ))}

            {/* Even works for a "Circle/Avatar" skeleton! */}
            {/* <div className="skeleton" style={{ height: '50px', width: '50px', borderRadius: '50%' }} /> */}
        </div>
    );
}

export default SkeletonTable;