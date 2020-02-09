
const inputData = [
    {
        firstName: 'John',
        lastName: 'Smith',
        companyName: 'IT Solutions',
        role: 'Analyst',
        address: '98 North Road',
        email: 'jsmith@itsolutions.co.uk',
        phone: '40716543298'
    },
    {
        firstName: 'Jane',
        lastName: 'Dorsey',
        companyName: 'MediCare',
        role: 'Medical Engineer',
        address: '11 Crown Street',
        email: 'jdorsey@mc.com',
        phone: '40791345621'
    },
    {
        firstName: 'Albert',
        lastName: 'Kipling',
        companyName: 'Waterfront',
        role: 'Accountant',
        address: '22 Guild Street',
        email: 'kipling@waterfront.com',
        phone: '40735416854'
    },
    {
        firstName: 'Michael',
        lastName: 'Robertson',
        companyName: 'MediCare',
        role: 'IT Specialist',
        address: '17 Farburn Terrace',
        email: 'mrobertson@mc.com',
        phone: '40733652145'
    },
    {
        firstName: 'Doug',
        lastName: 'Derrick',
        companyName: 'Timepath Inc.',
        role: 'Analyst',
        address: '99 Shire Oak Road',
        email: 'dderrick@timepath.co.uk',
        phone: '40799885412'
    },
    {
        firstName: 'Jessie',
        lastName: 'Marlowe',
        companyName: 'Aperture Inc.',
        role: 'Scientist',
        address: '27 Cheshire Street',
        email: 'jmarlowe@aperture.us',
        phone: '40733154268'
    },
    {
        firstName: 'Stan',
        lastName: 'Hamm',
        companyName: 'Sugarwell',
        role: 'Advisor',
        address: '10 Dam Road',
        email: 'shamm@sugarwell.org',
        phone: '40712462257'
    }, 
    {
        firstName: 'Michelle',
        lastName: 'Norton',
        companyName: 'Aperture Inc.',
        role: 'Scientist',
        address: '13 White Rabbit Street',
        email: 'mnorton@aperture.us',
        phone: '40731254562'
    },
    {
        firstName: 'Stacy',
        lastName: 'Shelby',
        companyName: 'TechDev',
        role: 'HR Manager',
        address: '19 Pineapple Boulevard',
        email: 'sshelby@techdev.com',
        phone: '40741785214'
    },
    {
        firstName: 'Lara',
        lastName: 'Palmer',
        companyName:'Timepath Inc.',
        role: 'Programmer',
        address: '87 Orange Street',
        email: 'lpalmer@timepath.co.uk',
        phone: '40731653845'
    }
];

const startButton = document.body.children[0].children[1].children[1].firstElementChild.firstElementChild.children[6].children[3];
const nextRoundButton = document.body.children[0].children[1].children[1].firstElementChild.children[1].firstElementChild.children[1];

ng.probe(startButton).triggerEventHandler('click');
for(let x = 0; x < 10; x++) {
    document.querySelector('[ng-reflect-name="labelAddress"]').value = inputData[x].address;
    document.querySelector('[ng-reflect-name="labelRole"]').value = inputData[x].role;
    document.querySelector('[ng-reflect-name="labelPhone"]').value = inputData[x].phone;
    document.querySelector('[ng-reflect-name="labelLastName"]').value = inputData[x].lastName;
    document.querySelector('[ng-reflect-name="labelFirstName"]').value = inputData[x].firstName;
    document.querySelector('[ng-reflect-name="labelEmail"]').value = inputData[x].email;
    document.querySelector('[ng-reflect-name="labelCompanyName"]').value = inputData[x].companyName;
    ng.probe(nextRoundButton).triggerEventHandler('click');
}       
ng.probe(getAllAngularRootElements()[0]).injector.get(ng.coreTokens.ApplicationRef).tick();

