import Button from '@flow-ui/core/control/Button';
import Meter from '@flow-ui/core/data/Meter';
import dialog from '@flow-ui/core/misc/utils/dialog';
import React, { Fragment } from 'react';
import { CaseProps } from "../../../plugins/CaseWrapper";
import UICaseBlock, { fakeValue } from '@flow-ui/showcase/src/UI/components/UICaseBlock';
import UICaseDocumentation from '@flow-ui/showcase/src/UI/components/UICaseDocumentation';

export default (props: CaseProps) => {

    return (
        <Fragment>
            <UICaseBlock
                title="Dialog"
                subtitle={`Function will create dialog in modal`}
                scope={{ Button, dialog }}

                children={
                    <Button
                        onClick={fakeValue(`
                        () => {
                            dialog({
                                title: "Hello",
                                message: "Ops, something went wrong",
                                buttonText: "Close"
                            })
                        }
                        `)}
                        children="Show dialog"
                    />
                }
                paths={[
                    `@flow-ui/core/misc/utils/dialog`,
                ]}
            />
            <UICaseBlock
                title="With custom content"
                subtitle={`Useful when need instant custom modal`}
                scope={{ Button, Meter, dialog }}

                children={
                    <Button
                        onClick={fakeValue(`
                        () => {
                            dialog({
                                title: "In progress",
                                customContent: (
                                    <Meter animation percent={100} />
                                )
                            })
                        }
                        `)}
                        children="Show custom dialog"
                    />
                }
                paths={[
                    `@flow-ui/core/misc/utils/dialog`,
                ]}
            />
            <UICaseDocumentation
                ns="ViewportTypes"
                filter={["DialogOptions"]}
                // openInterfaces={["DialogOptions"]}
            />
        </Fragment>
    )
}