import React, {useEffect, FC } from "react";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/solid";
import { ListBoxItemType } from "../../components/NcListBox/NcListBox";
import ButtonDropdown from "../../components/ButtonDropdown/ButtonDropdown";
import { useRouter ,NextRouter } from 'next/router';
import  Link  from "next/link";


export interface ArchiveFilterListBoxProps {
  className?: string;
  lists: ListBoxItemType[];
  router: NextRouter
}

const ArchiveFilterListBox: FC<ArchiveFilterListBoxProps> = ({
  className = "",
  lists,
  router,
}) => {
  //const router = useRouter();
  const query = router.query;
  console.log("query",query,router.pathname)
  const n = query.n
  const p = query.p
  //const pL=query.podcast? Array.isArray(query.podcast) ? query.podcast[0] : query.podcast:""
  //const tag=query.tag? Array.isArray(query.tag) ? query.tag[0] : query.tag:""
  //const categorie=query.category? Array.isArray(query.category) ? query.category[0] : query.category:"default"
  const filtre =query.filtre? Array.isArray(query.filtre) ? query.filtre[0] : query.filtre:"Recent"

  useEffect(() => {
    if (router.isReady)
    {
      setSelected({name:getFiltreValueInverse(filtre)})
    }
  }, [query,router.isReady]);
  const getFiltreValue = (filtre:string) => {
    let name=""
    switch (filtre) {
      case "Plus Vus":
        name ="Ecoute"
        break;
    case "Plus Commentés":
        name = "Commente"
        break;
    case "Plus Populaire":
        name ="Populaire"
        break;
    case "Plus Récents":
        name = "Recent"
        break;
    default:
        name="Recent"

  }
   return name
  };
  const getFiltreValueInverse = (filtre:string) => {
    let name=""
    switch (filtre) {
      case "Ecoute":
          name ="Plus Vus"
          break;
      case "Commente":
          name = "Plus Commentés"
          break;
      case "Populaire":
          name ="Plus Populaires"
          break;
      case "Recent":
          name = "Plus Récents"
          break;
      default:
          name="Plus récents"

  }
   return name
  };
  const [selected, setSelected] = useState({name:getFiltreValueInverse(filtre)});


  return (
    <div
      className={`nc-ArchiveFilterListBox ${className}`}
      data-nc-id="ArchiveFilterListBox"
    >
     <Listbox value={selected} onChange={setSelected}>
        <div className="relative md:min-w-[200px]">
          <Listbox.Button as={"div"}>
            <ButtonDropdown>{selected.name}</ButtonDropdown>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute right-0 z-20 w-52 py-1 mt-1 overflow-auto text-sm text-neutral-900 dark:text-neutral-200   rounded-md shadow-xl max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-neutral-900 dark:ring-neutral-700 bg-white">
              {lists.map((item: ListBoxItemType, index: number) => (
                <Listbox.Option
                  key={index}
                  className={({ active }) =>
                    `${
                      active
                        ? "text-primary-700 dark:text-neutral-200 bg-primary-50 dark:bg-neutral-700"
                        : ""
                    } cursor-default select-none relative py-2 pl-10 pr-4`
                  }
                  value={item}
                >


                        <>
                        <Link
                          href={{
                          pathname:router.pathname,
                          query:{n:n,p:p,filtre:getFiltreValue(item.name)}
                       }}
                      >
                      <a
                        className={`${
                          selected ? "font-medium" : "font-normal"
                        } block truncate`}
                      >
                        {item.name}
                      </a>
                      </Link>
                      {selected.name===item.name ? (
                        <span
                        className="text-primary-700 absolute inset-y-0 left-0 flex items-center pl-3 dark:text-neutral-200">
                          <CheckIcon className="w-5 h-5" aria-hidden="true" />
                        </span>
                      ) : null}
                         </>



                </Listbox.Option>

              ))}

            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default ArchiveFilterListBox;
