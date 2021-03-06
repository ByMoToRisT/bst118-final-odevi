import React from 'react'
import CharacterItem from './CharacterItem'

const CharacterTable = ({items,isLoading}) => {
    return isLoading ? <div class="x alert alert-danger" role="alert">
    API ILE BAGLANTI KURULUYOR...
  </div> :
    <section className="contents">
        {
            items.map(item=>(
                <CharacterItem key={item.id} item={item}></CharacterItem>
            ))
        }
    </section>
}

export default CharacterTable
