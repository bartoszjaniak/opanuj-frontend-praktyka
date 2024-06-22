import { validate } from "./validate";

enum ResultMessage {
    VALID = 'Valid',
    INVALID = 'Invalid'
}

export const prepareMessage = (value: string) => {
    if (validate(value)) {
        return ResultMessage.VALID;
    }

    return ResultMessage.INVALID;
};
