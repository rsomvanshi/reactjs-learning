import React from 'react';
import ReactDOM from 'react-dom';
import CommonDetail from './CommonDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommonDetail author="Alex" image={faker.image.avatar()} content="Nice blog post!" time="Today at 4:00 PM" />
            </ApprovalCard>
            <ApprovalCard>
                <CommonDetail author="Sam"  image={faker.image.avatar()} content="Nice blog post!" time="Today at 5:00 PM" />
            </ApprovalCard>
            <ApprovalCard>
                <CommonDetail author="Jane" image={faker.image.avatar()} content="Nice blog post!" time="Today at 6:00 PM" />
            </ApprovalCard>
        </div>

    )
}

ReactDOM.render(<App/>, document.querySelector('#root'))
