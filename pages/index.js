export default () => (
    <div>
        <form action="/Skill" method="POST" target="hiddenFrame">
            <input
                name="name"
                type="text"
                placeholder="Skill"
            />
            <button type="Submit">Post New Skill</button>
        </form>

        <iframe
            name="hiddenFrame"
            style={{ display: 'none' }}
        />
    </div>
)