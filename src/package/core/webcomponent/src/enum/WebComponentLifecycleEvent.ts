export enum WebComponentLifecycleEvent {
    BEFORE_INIT = 'BEFORE_INIT',
    INIT = 'INIT',
    SHADOW_ATTACHED = 'SHADOW_ATTACHED',
    BEFORE_MOUNT = 'BEFORE_MOUNT',
    MOUNT = 'MOUNT',
    REMOUNT = 'REMOUNT',
    BEFORE_UNMOUNT = 'BEFORE_UNMOUNT',
    UNMOUNT = 'UNMOUNT',
    MOUNT_CHILDREN = 'MOUNT_CHILDREN',
    REMOUNT_CHILDREN = 'REMOUNT_CHILDREN',
    UNMOUNT_CHILDREN = 'UNMOUNT_CHILDREN',
    BEFORE_ATTRIBUTE_CHANGE = 'BEFORE_ATTRIBUTE_CHANGE',
    BEFORE_PROPS_CHANGE = 'BEFORE_PROPS_CHANGE',
    FLOW = 'FLOW',
    REFLOW = 'REFLOW',
    RENDER = 'RENDER',
}