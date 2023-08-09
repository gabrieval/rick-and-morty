export default function Card(props) {
    const { character, onClose } = props;

    return (
        <div>
            <img src={character.image} alt={character.name} />
            <h2>name:{character.name}</h2>
            <button onClick={onClose}>X</button>
            <h2>{character.species}</h2>
            <h2>{character.gender}</h2>
        </div>
    );
}