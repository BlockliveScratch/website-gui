import './needsTag.css'

export default function NeedsTag({need}) {
    return <needTag style={{backgroundColor:needsColors[need]}}>
       <lilCircle></lilCircle> {need}
    </needTag>
}

const needsColors={
    'animator':'pink',
    'coder':'orange',
    'artist':'purple',
    'sound':'blue',
    'designer':'green'
}