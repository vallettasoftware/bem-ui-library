import React from 'react';
import TextField from '../../ui/components/TextField';
import Page from '../components/Page';
import Demo from '../components/Demo';

export const InputsPage = () => {
  return (
    <Page title="Inputs">

      <Demo
        title="Default"
        preview={
          <>
            <TextField
              label="Enter your name"
              id="txt01" name="txt01"
              placeholder="Name"
            />

            <br/>

            <TextField
              id="txt01_02" name="txt01_02"
              placeholder="Without label"
            />
          </>
        }
        code={`
<TextField
  label="Enter your name"
  id="txt01" name="txt01"
  placeholder="Name"
/>

<TextField
  id="txt01_02" name="txt01_02"
  placeholder="Without label"
/>
        `}
      >
      </Demo>

      <Demo
        title="With icon"
        preview={
          <TextField
            label="Enter password"
            type="password"
            id="txt02" name="txt02"
            icon="lock"
            placeholder="password"
          />
        }
        code={`
<TextField
  label="Enter password"
  type="password"
  id="txt02" name="txt02"
  icon="secure"
  placeholder="password"
/>
        `}
      >
      </Demo>

      <Demo
        title="Success"
        preview={
          <TextField
            label="Enter password"
            type="password"
            id="txt03" name="txt03"
            icon="lock"
            placeholder="password"
            success={true}
            value="123456"
          />
        }
        code={`
<TextField
  label="Enter password"
  type="password" 
  id="txt03" name="txt03"
  icon="secure"
  placeholder="password"
  success={true}
  value="123456"
/>        
        `}
      />

      <Demo
        title="With error"
        preview={
          <TextField
            label="Enter email"
            type="email"
            id="txt04" name="txt04"
            error="Email address is not valid"
            value="dd@dd"
          />
        }
        code={`
<TextField
  label="Enter email"
  type="email"
  id="txt04" name="txt04"
  error="Email address is not valid"
  value="dd@dd"
/>
        `}
      />

      <Demo
        title="Disabled"
        preview={
          <TextField
            label="Enter email"
            id="txt05" name="txt05"
            placeholder="Disabled input"
            disabled
          />
        }
        code={`
<TextField
  label="Enter email"
  id="txt05" name="txt05"
  placeholder="Disabled input"
  disabled
/>
        `}
      />

      <Demo
        title="With mask"
        preview={
          <TextField
            label="Enter URL"
            id="txt06" name="txt06"
            mask="http://"
            placeholder="example.com"
          />
        }
        code={`
<TextField
  label="Enter URL"
  id="txt06" name="txt06"
  mask="http://"
  placeholder="example.com"
/>
        `}
      />

      <Demo
        title="With button"
        preview={
          <TextField
            label="Label"
            id="txt07" name="txt07"
            placeholder="Field with button"
            button="Upload"
            buttonOnClick={() => alert('Click')}
          />
        }
        code={`
<TextField
  label="Label"
  id="txt07" name="txt07"
  placeholder="Field with button"
  button="Upload"
  buttonOnClick={() => alert('Click')}
/>
        `}
      />

      <Demo
        title="With icon-button"
        preview={
          <TextField
            label="Label"
            id="txt08" name="txt08"
            placeholder="Field with button"
            button="Upload"
            buttonIcon="map"
          />
        }
        code={`
<TextField
  label="Label"
  id="txt08" name="txt08"
  placeholder="Field with button"
  button="Upload"
  buttonIcon="map"
/>        
        `}
      />

      <Demo
        title="Animated label"
        preview={
          <TextField
            label="Animated label"
            id="txt09" name="txt09"
            placeholder="Field with button"
            animateLabel={true}
          />
        }
        code={`
<TextField
  label="Animated label"
  id="txt09" name="txt09"
  placeholder="Field with button"
  animateLabel={true}
/>
        `}
      />

      {/*      <div className="box">*/}
      {/*        <div className="box__item">*/}
      {/*          <Tabs>*/}
      {/*            <div title="View">*/}
      {/*              <Input*/}
      {/*                type="text"*/}
      {/*                label={'Name input'}*/}
      {/*              />*/}
      {/*            </div>*/}
      {/*            <div title="Code">*/}
      {/*              <Code>*/}
      {/*                {`<Input */}
      {/*    type="text"*/}
      {/*    label={'Name input'}*/}
      {/*/>`}*/}
      {/*              </Code>*/}
      {/*            </div>*/}
      {/*          </Tabs>*/}
      {/*        </div>*/}
      {/*        <div className="box__item">*/}
      {/*          <Tabs>*/}
      {/*            <div title="View">*/}
      {/*              <Input*/}
      {/*                type="text"*/}
      {/*                label={'Name input'}*/}
      {/*                value={'User name'}*/}
      {/*              />*/}
      {/*            </div>*/}
      {/*            <div title="Code">*/}
      {/*              <Code>*/}
      {/*                {`<Input */}
      {/*    type="text"*/}
      {/*    label={'Name input'}*/}
      {/*    value={'User name'}*/}
      {/*/>`}*/}
      {/*              </Code>*/}
      {/*            </div>*/}
      {/*          </Tabs>*/}
      {/*        </div>*/}
      {/*        <div className="box__item">*/}
      {/*          <Tabs>*/}
      {/*            <div title="View">*/}
      {/*              <Input*/}
      {/*                type="email"*/}
      {/*                label={'Email address'}*/}
      {/*                validation={[*/}
      {/*                  {*/}
      {/*                    type: 'required',*/}
      {/*                    message: 'Field is required'*/}
      {/*                  }, {*/}
      {/*                    type: 'email',*/}
      {/*                    message: 'Incorrect format'*/}
      {/*                  }*/}
      {/*                ]}*/}
      {/*              />*/}
      {/*            </div>*/}
      {/*            <div title="Code">*/}
      {/*              <Code>*/}
      {/*                {`<Input */}
      {/*    type="email"*/}
      {/*    label={'Email address'}*/}
      {/*    validation={[*/}
      {/*        {*/}
      {/*            type: 'required',*/}
      {/*            message: 'Field is required'*/}
      {/*        },{*/}
      {/*            type: 'email',*/}
      {/*            message: 'Incorrect format'*/}
      {/*        }*/}
      {/*    ]}*/}
      {/*/>`}*/}
      {/*              </Code>*/}
      {/*            </div>*/}
      {/*          </Tabs>*/}
      {/*        </div>*/}

      {/*        <div className="box__item">*/}
      {/*          <Tabs>*/}
      {/*            <div title="View">*/}
      {/*              <Input*/}
      {/*                type="password"*/}
      {/*                label={'Password'}*/}
      {/*                validation={[*/}
      {/*                  {*/}
      {/*                    type: 'password',*/}
      {/*                    length: 6,*/}
      {/*                    message: 'Password must include at least 6 characters',*/}
      {/*                  }*/}
      {/*                ]}*/}
      {/*              />*/}
      {/*            </div>*/}
      {/*            <div title="Code">*/}
      {/*              <Code>*/}
      {/*                {`<Input */}
      {/*    type="text"*/}
      {/*    label={'Name input'}*/}
      {/*/>`}*/}
      {/*              </Code>*/}
      {/*            </div>*/}
      {/*          </Tabs>*/}
      {/*        </div>*/}

      {/*        <div className="box__item">*/}
      {/*          <Tabs>*/}
      {/*            <div title="View">*/}
      {/*              <Input*/}
      {/*                type="text"*/}
      {/*                label={'Address'}*/}
      {/*                validation={[*/}
      {/*                  {*/}
      {/*                    type: 'custom',*/}
      {/*                    message: `Incorrect format`,*/}
      {/*                    callback: (value) => {*/}
      {/*                      return value.match('http://');*/}
      {/*                    }*/}
      {/*                  }*/}
      {/*                ]}*/}
      {/*              />*/}
      {/*            </div>*/}
      {/*            <div title="Code">*/}
      {/*              <Code>*/}
      {/*                {`<Input */}
      {/*    type="text"*/}
      {/*    label={'Name input'}*/}
      {/*/>`}*/}
      {/*              </Code>*/}
      {/*            </div>*/}
      {/*          </Tabs>*/}
      {/*        </div>*/}

      {/*        <div className="box__item">*/}
      {/*          <Tabs>*/}
      {/*            <div title="View">*/}
      {/*              <Input*/}
      {/*                type="text"*/}
      {/*                label={'Loading...'}*/}
      {/*                isLoading={true}*/}
      {/*              />*/}
      {/*            </div>*/}
      {/*            <div title="Code">*/}
      {/*              <Code>*/}
      {/*                {`<Input */}
      {/*    type="text"*/}
      {/*    label={'Name input'}*/}
      {/*/>`}*/}
      {/*              </Code>*/}
      {/*            </div>*/}
      {/*          </Tabs>*/}
      {/*        </div>*/}
      {/*      </div>*/}
    </Page>
  )
};
