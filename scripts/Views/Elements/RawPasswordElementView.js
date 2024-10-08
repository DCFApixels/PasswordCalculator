class RawPasswordElementView extends ViewBase
{
    #root;
    #div;
    #label;
    #settingsButton;
    #deleteButton;

    get name() { return this.#label.innerText; }
    set name(value) { this.#label.innerText = value; }
    get isSelected() { return this.#div.classList.contains("checked"); }
    set isSelected(value) 
    { 
        if(value)
        {
            this.#div.classList.add("checked")
        }
        else
        {
            this.#div.classList.remove("checked")
        }
    }

    constructor(root, div, label, settingsButton, deleteButton)
    {
        super();
        this.#root = root;
        this.#div = div;
        this.#label = label;
        this.#settingsButton = settingsButton;
        this.#deleteButton = deleteButton;

        this.#root.addEventListener('click', this.#OnCheckboxClicked.bind(this));
        this.#settingsButton.addEventListener('click', this.#OnSettingsButtonClicked.bind(this));
        this.#deleteButton.addEventListener('click', this.#OnDeleteButtonClicked.bind(this));
    }

    #OnCheckboxClicked(event)
    {
        this.controller.OnUserSelect();
        event.stopPropagation();
    }
    #OnSettingsButtonClicked(event)
    {
        this.controller.OnEditButtonClick();
        event.stopPropagation();
    }
    #OnDeleteButtonClicked(event)
    {
        this.controller.OnDeleteButtonClick();
        event.stopPropagation();
    }


    #isHidden = false;
    get isHidden()
    {
        return this.#isHidden;
    }
    Show()
    {
        if(!this.#isHidden) { return; }
        this.#root.classList.remove('hidden');
        this.#isHidden = false;
    }
    Hide()
    {
        if(this.#isHidden) { return; }
        this.#root.classList.add('hidden');
        this.#isHidden = true;
    }







    
    static Create(targetElem)
    {
        let lielem = document.createElement("li");
        let divelem = document.createElement("div");
        divelem.classList.add("passwords_list_element");
        lielem.appendChild(divelem);

        let result = new RawPasswordElementView(
            lielem,
            divelem,
            document.createElement("label"),
            document.createElement("button"),
            document.createElement("button"));

        result.#settingsButton.type = "button";
        result.#deleteButton.type = "button";
        //result.#checkbox.type = 'checkbox';

        result.#settingsButton.classList = "trnsp icon_button setting";
        result.#deleteButton.classList = "trnsp icon_button delete";

        //divelem.appendChild(result.#checkbox);
        divelem.appendChild(result.#label);
        divelem.appendChild(result.#settingsButton);
        divelem.appendChild(result.#deleteButton);

        targetElem.appendChild(lielem);


        return result;
    }
}