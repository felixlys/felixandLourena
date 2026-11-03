
export default function MinionBuddy({ className = '' }) {
    return (
        <div
            className={`minion-buddy minion-float ${className}`}
            aria-hidden="true"
        >
            <span className="minion-hair" />

            <div className="minion-goggles">
                <span className="minion-eye" />
            </div>

            <span className="minion-smile" />

            <div className="minion-overall">
                <span className="minion-pocket" />
            </div>
        </div>
    );
}
