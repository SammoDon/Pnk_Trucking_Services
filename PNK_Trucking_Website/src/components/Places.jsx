import '../styling/Map.css'
import usePlacesAutocomplete, {getGeocode, getLatLng} from "use-places-autocomplete"
import { Combobox, ComboboxInput, ComboboxOption, ComboboxOptions } from '@headlessui/react'

export default function Places({setOffice}){
    const{
        ready,
        value, 
        setValue, 
        suggestions: {status, data}, 
        clearSuggestions 
        }= usePlacesAutocomplete();

console.log({status,data});

    return (
        <Combobox value={value} onChange={setValue}>
        <div className="relative">
          {/* Combobox Input */}
          <ComboboxInput
            className="combobox-input"
            placeholder="Search office address"
            onChange={(e) => setValue(e.target.value)}
            disabled={ready}
          />
          
          {/* Combobox Options */}
          {status === "OK" && (
            <ComboboxOptions className="combobox-popover">
              {data.map(({ place_id, description }) => (
                <ComboboxOption
                  key={place_id}
                  value={description}
                  className={({ selected }) =>
                    `combobox-option ${
                      selected ? 'bg-blue-500 text-white' : 'bg-white text-black'
                    }`
                  }
                >
                  {description}
                </ComboboxOption>
              ))}
            </ComboboxOptions>
          )}
        </div>
      </Combobox>
    );
}